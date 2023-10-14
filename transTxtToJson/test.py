import json


def txt_to_json(txt_file, json_file):
    words = {}
    with open(txt_file, 'r', encoding='UTF-8', errors='ignore') as f:
        for line in f:
            try:
                parts = line.split(' ')
                word = parts[0].split()[0]
                explanation = parts[1].strip()
                words[word] = explanation
            except:
                print(f"处理行失败: {line}")

    with open(json_file, 'w') as f:
        json.dump(words, f, ensure_ascii=False)

    del words


txt_to_json('扇贝完整乱序.txt', '扇贝完整乱序.json')