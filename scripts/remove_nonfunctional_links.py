import re
import requests

# Path to your markdown file
filename = "/Users/akhilr/Documents/Coding/COLC/docs/Architecture/Websites.md"

# Regex pattern to match markdown links: [text](url)
link_pattern = re.compile(r'\[([^\]]+)\]\((https?://[^\)]+)\)')

def is_link_functional(url):
    try:
        response = requests.head(url, timeout=5)
        # Some websites don't allow HEAD; fall back to a GET if status looks problematic
        if response.status_code >= 400:
            response = requests.get(url, timeout=5)
        return response.status_code < 400
    except requests.RequestException:
        return False
    
output_lines = []
with open(filename, 'r', encoding='utf-8') as file:
    for line in file:
        match = link_pattern.search(line)
        if match:
            url = match.group(2)
            if is_link_functional(url):
                output_lines.append(line)
            else:
                print(f"Removing nonfunctional link: {url}")
                # Skip the line with the broken link
                continue
        else:
            output_lines.append(line)

with open(filename, 'w', encoding='utf-8') as file:
    file.writelines(output_lines)