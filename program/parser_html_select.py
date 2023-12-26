from bs4 import BeautifulSoup

while True:
    html_lines = []

    while True:
        line = input()
        if line.strip().lower() == 'done':
            break
        html_lines.append(line)

    # Join the lines to form the complete HTML content
    html = '\n'.join(html_lines)

    # Parse the HTML
    soup = BeautifulSoup(html, 'html.parser')

    # Create a dictionary to store the objects
    objects = {}

    # Find the select element
    select = soup.find('select', {'name': 'product_id'})

    if select is None:
        select = soup.find('select', {'name': 'generation_id'})

    # Iterate through the options
    for option in select.find_all('option'):
        option_text = option.text.strip()
        
        # Skip the "Engine type" option
        if option_text == "Engine type":
            continue
        if option_text == "Vehicle Year":
            continue
        
        # Create an object for the option
        objects[option_text] = {
        }

    # Print the created objects
    for key, value in objects.items():
        print(f'"{key}": {value},')
