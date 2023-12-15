import google.generativeai as genai
import os

genai.configure(api_key=os.environ['AIzaSyBfh2NQszHbsflmCj4E6MDeyx6M8FzuPHY'])

model = genai.Model(name='gemini-pro')
response = model.generate_content('are you working?')

print(response.text)
