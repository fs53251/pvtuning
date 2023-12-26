from bs4 import BeautifulSoup

while True:
    html_lines = []

    while True:
        line = input()
        if line.strip().lower() == 'done':
            break
        html_lines.append(line)
    html = '\n'.join(html_lines)
     
    # Parse the HTML
    soup = BeautifulSoup(html, 'html.parser')

    # Initialize the object with default values
    data = {
        "std_power": 0,
        "tuned_power": 0,
        "std_torque": 0,
        "tuned_torque": 0,
        "cc": 0,
        "Type_ecu": "",
        "Engine_code": "",
    }

    # Find and extract the engine power information
    power_items = soup.find_all('div', class_='EnginePower__item')

    for item in power_items:
        label = item.find('div', class_='EnginePower__label').text.strip()
        value = item.find('div', class_='EnginePower__result').text.strip()
        if label == 'Standard' and "Nm" not in value:
            data['std_power'] = int(value.replace('hp', ''))
        elif label == 'Tuned' and "Nm" not in value:
            data['tuned_power'] = int(value.replace('hp', ''))

    # Find and extract the engine torque information
    torque_items = soup.find_all('div', class_='EnginePower__item')

    for item in torque_items:
        label = item.find('div', class_='EnginePower__label').text.strip()
        value = item.find('div', class_='EnginePower__result').text.strip()
        if label == 'Standard' and "hp" not in value:
            data['std_torque'] = int(value.replace('Nm', ''))
        elif label == 'Tuned' and "hp" not in value:
            data['tuned_torque'] = int(value.replace('Nm', ''))

    # Find and extract the engine specifications
    specs = soup.find('div', class_='Specifications')
    if specs:
        table = specs.find('table', class_='mobile')
        if table:
            rows = table.find_all('tr')
            for row in rows:
                cells = row.find_all('td')
                if len(cells) == 2:
                    attribute = cells[0].text.strip()
                    value = cells[1].strong.text.strip()
                    if attribute == 'Cylinder capacity':
                        data['cc'] = int(value.replace('cc', ''))
                    elif attribute == 'Type ecu':
                        data['Type_ecu'] = value
                    elif attribute == 'Engine Code':
                        data['Engine_code'] = value

    # Print the extracted data
    for key, value in data.items():
        if (key == "Type_ecu" or key == "Engine_code"):
            print(f'"{key}": "{value}",')
        else:
            print(f'"{key}": {value},')
