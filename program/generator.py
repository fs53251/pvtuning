from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from bs4 import BeautifulSoup

# Inicijalizirajte Selenium WebDriver
driver = webdriver.Chrome()

# Otvorite web stranicu koja sadrži iframe
driver.get("https://atm-chiptuning.me/tuning-specs")

# Pričekajte da se iframe učita
wait = WebDriverWait(driver, 10)
iframe = wait.until(EC.presence_of_element_located((By.ID, "iFrameResizer0")))

# Prebacite se na iframe
driver.switch_to.frame(iframe)

# Sada možete pronaći select element unutar iframe-a
select_vehicle = driver.find_element(By.NAME, "brand_id")

##select_engine = driver.find_element(By.NAME, "product_id")
vehicle_options = select_vehicle.find_elements(By.TAG_NAME, "option")

# Create a list of brand names and data-urlname attributes
brand_data = [(brand_option.text, brand_option.get_attribute("data-urlname")) for brand_option in vehicle_options]

for brand_name, data_urlname in brand_data[44:]:
    print(f'"{brand_name}": {{')
    select_vehicle = driver.find_element(By.NAME, "brand_id")
    brand_option = select_vehicle.find_element(By.XPATH, f".//option[@data-urlname='{data_urlname}']")
    brand_option.click()
    time.sleep(1.2)

    select_model = driver.find_element(By.NAME, "model_id")
    model_options = select_model.find_elements(By.TAG_NAME, "option")
    model_data = [(model_option.text, model_option.get_attribute("data-urlname")) for model_option in model_options]
    
    for model_name, data_urlname in  model_data[29:]:
        print(f'    "{model_name}": {{')
        select_model = driver.find_element(By.NAME, "model_id")
        model_option = select_model.find_element(By.XPATH, f".//option[@data-urlname='{data_urlname}']")
        model_option.click()
        time.sleep(1.2)

        select_year = driver.find_element(By.NAME, "generation_id")
        year_options = select_year.find_elements(By.TAG_NAME, "option")
        year_data = [(year_option.text, year_option.get_attribute("data-urlname")) for year_option in year_options]

        for year_name, data_urlname in year_data[1:]:
            print(f'        "{year_name}": {{')
            select_year = driver.find_element(By.NAME, "generation_id")
            year_option = select_year.find_element(By.XPATH, f".//option[@data-urlname='{data_urlname}']")
            year_option.click()
            time.sleep(1.2)

            select_engine = driver.find_element(By.NAME, "product_id")
            engine_options = select_engine.find_elements(By.TAG_NAME, "option")
            engine_data = [(engine_option.text, engine_option.get_attribute("data-urlname")) for engine_option in engine_options]

            for engine_name, data_urlname in engine_data[1:]:
                print(f'            "{engine_name}": {{')
                select_engine = driver.find_element(By.NAME, "product_id")
                engine_option = select_engine.find_element(By.XPATH, f".//option[@data-urlname='{data_urlname}']")
                engine_option.click()

                view_gains_button = driver.find_element(By.LINK_TEXT, "View Gains")
                view_gains_button.click()
                time.sleep(1.6)
                html = driver.page_source
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
                        print(f'                "{key}": "{value}",')
                    else:
                        print(f'                "{key}": {value},')
                print(f'            }},')
                
            print(f'        }},')
            
        print(f'    }},')


    print(f'}},')

# Zatvorite preglednik
driver.quit()
