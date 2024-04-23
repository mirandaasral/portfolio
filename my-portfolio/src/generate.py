import os
import json
import pandas as pd

piecesDf = pd.read_csv('./portfolio-sheet.csv')

importFiles = {}
pieces = []

def fileNameToVariableName(filename):
    file = filename.split('/')[-1]
    file = file.split('.')[0].replace('-', '_')
    if file in importFiles:
        file = file + "_2"
    return file

for index, row in piecesDf.iterrows():
    piece = {}
    # put names in dict
    piece['name'] = row['name']
    piece['description'] = row['description'] if not isinstance(row['description'], float) else ''
    # put preview data in dict and importFiles dict
    previewFileVar = fileNameToVariableName(row['preview'])
    importFiles[previewFileVar] = row['preview']
    piece['listImg'] = previewFileVar
    # put source data in
    if os.path.isfile(row['source']): # source is a file
        sourceFileVar = fileNameToVariableName(row['source'])
        importFiles[sourceFileVar] = row['source']
        piece['fullImg'] = sourceFileVar
    elif os.path.isdir(row['source']): # source is a folder (set of files)
        sources = os.listdir(row['source'])
        print(json.dumps(sources, indent=2))
        sources.sort()
        fullImgSources = []
        for source in sources:
            source = row['source'] + '/' + source
            sourceFileVar = fileNameToVariableName(source)
            importFiles[sourceFileVar] = source
            fullImgSources.append(sourceFileVar)
        piece['fullImg'] = fullImgSources
    pieces.append(piece)

file_output = '// --- This is a generated file ---\n'

for fileVar in importFiles:
    segment = f'import {fileVar} from "{importFiles[fileVar]}";'
    file_output = file_output + segment + '\n'

file_output = file_output + '\n\n'

file_output = file_output + 'export const pieces = [\n'

single_quote = '"'
new_line = '\n'
fake_new_line = '\\n'

for piece in pieces:
    nameStr = f'    name: "{piece["name"]}",'
    descStr = f'    description: "{piece["description"].replace(new_line, fake_new_line)}",'
    prevStr = f'    listImg: {piece["listImg"]},'
    sorcStr = f'    fullImg: {json.dumps(piece["fullImg"], indent=6).replace(single_quote, "")},'
    file_output = file_output + '  {\n' + '\n'.join([nameStr, descStr, prevStr, sorcStr]) + '\n  },\n'

file_output = file_output + '];'

with open('Pieces.js', 'w') as fp:
    fp.write(file_output)


