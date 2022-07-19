from bs4 import BeautifulSoup
import yaml 
import sys

en_yaml = "_i18n/en.yml"
index = "resources/user-guides/index.md"

with open(en_yaml, 'r') as stream:
    data_loaded = yaml.safe_load(stream)
with open(index, "r") as f:
    soup = BeautifulSoup(f, "html.parser")

divs = soup.find_all("div", {"class": "col"})
data = {}
for div in divs:
    category = str(div.find("h2"))
    category = category.split(".")[1].split(" ")[0]
    data[category] = []
    items = div.find_all("p")
    for raw_html in items:
        title_key = raw_html.text.split(".")[1].split(" ")[0]
        title_yaml = data_loaded["user-guides"][title_key]
        info = { 
                    "title_key": title_key,
                    "title_yaml": title_yaml,
                    "raw_data": raw_html
                }
        data[category].append(info)

success = 1
for category in data:
    original = data[category]
    alphabetic = sorted(data[category], key=lambda d: d['title_yaml']) 
    data[category] = alphabetic
    if original == alphabetic:
        print(f"--> Category: {category} [ OK ]")
    else:
        print(f"--> Category: {category} [ FAIL ]")
        success = 0

if success == 0:
    sys.exit(1)
