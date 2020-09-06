from selenium import webdriver
from selenium.webdriver.chrome.options import Options
chrome_options = Options()
chrome_options.add_argument("--kiosk")
chrome_options.add_argument("disable_infobars")
driver = webdriver.Chrome(chrome_options=chrome_options)
driver.get("http://127.0.0.1:8000/")
