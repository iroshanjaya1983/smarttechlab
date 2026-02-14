const projects = [
    {
        "id": "1",
        "title": "Smart Home Automation System",
        "category": "iot",
        "shortDesc": "A complete IoT solution for home automation using ESP32 and MQTT.",
        "fullDesc": "This project integrates various sensors (temperature, humidity, motion) with an ESP32 microcontroller to automate home appliances. Data is sent to a cloud dashboard via MQTT for real-time monitoring and control. The system supports voice commands through Google Assistant integration.",
        "image": "https://images.unsplash.com/photo-1558002038-1091a166111c?auto=format&fit=crop&q=80&w=800",
        "techStack": ["ESP32", "C++", "MQTT", "Node-RED"],
        "codeSnippet": "void setup() {\n  WiFi.begin(ssid, password);\n  client.setServer(mqtt_server, 1883);\n}",
        "date": "2023-10-15"
    },
    {
        "id": "2",
        "title": "Inventory Management Dashboard",
        "category": "software",
        "shortDesc": "Web-based dashboard for tracking stock levels in real-time.",
        "fullDesc": "Built with React and Node.js, this application allows warehouse managers to track inventory, generate PDF reports, and receive low-stock alerts. It features a responsive UI with dark mode support.",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        "techStack": ["React", "Node.js", "MongoDB", "Express"],
        "codeSnippet": "const getInventory = async (req, res) => {\n  const items = await Item.find({});\n  res.json(items);\n};",
        "date": "2023-11-02"
    },
    {
        "id": "3",
        "title": "Arduino Robotic Arm",
        "category": "electronic",
        "shortDesc": "4-DOF robotic arm controlled via joystick.",
        "fullDesc": "A 4-degree-of-freedom robotic arm powered by servo motors and controlled by an Arduino UNO. The arm is constructed using 3D printed parts and can perform pick-and-place operations with high precision.",
        "image": "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&q=80&w=800",
        "techStack": ["Arduino", "Servo Motors", "C++", "3D Printing"],
        "codeSnippet": "servo1.write(joyX);\nservo2.write(joyY);\ndelay(15);",
        "date": "2023-09-20"
    },
	{
        "id": "4",
        "title": "Arduino Robotic Arm",
        "category": "electronic",
        "shortDesc": "4-DOF robotic arm controlled via joystick.",
        "fullDesc": "A 4-degree-of-freedom robotic arm powered by servo motors and controlled by an Arduino UNO. The arm is constructed using 3D printed parts and can perform pick-and-place operations with high precision.",
        "image": "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&q=80&w=800",
        "techStack": ["Arduino", "Servo Motors", "C++", "3D Printing"],
        "codeSnippet": "servo1.write(joyX);\nservo2.write(joyY);\ndelay(15);",
        "date": "2023-09-20"
    },
	// Add this object to the 'projects' array in data.js
// Add this object to the 'projects' array in data.js
{
    "id": "5",
    "title": "ESP32 Edge-Web Control Node",
    "category": "iot",
    "shortDesc": "This project transforms an ESP32 microcontroller into a standalone Wireless Access Point (WAP) and Web Server. It allows any Wi-Fi-enabled device (sma",
    "fullDesc": "Key Features\nInfrastructure-Free: Acts as its own Wi-Fi Hotspot (SSID: esp32-iot), eliminating dependency on external networks.\n\nEmbedded Web Server: Hosts a responsive HTML/CSS dashboard directly on the chip's flash memory.\n\nReal-Time Hardware Interaction: Low-latency control of GPIO pins (onboard LED) via HTTP GET requests.\n\nMobile-Optimized UI/UX: Features a \"Light Mode\" aesthetic with a responsive design that adapts to any screen size.\n\nEfficient Resource Management: Written in MicroPython, utilizing non-blocking socket communication to ensure high uptime and stability.\n\nPotential Applications\nLocalized Smart Switches: Controlling lights or motors in areas without Wi-Fi.\n\nIndustrial Maintenance: Providing a diagnostic dashboard for technicians to access via their phones.\n\nEducational IoT: A foundational project for learning about network sockets and embedded web servers.",
    "image": "images/1.jpeg",
    "techStack": [
        "ESP32 (Dual-core",
        "2.4GHz Wi-Fi)",
        "MicroPython",
        "802.11 b/g/n Wi-Fi (AP Mode)",
        "HTTP (TCP/IP Socket)",
        "HTML5 / CSS3 (Internal Stylesheet)"
    ],
    "codeSnippet": "import network\nimport socket\nimport machine\n\n# 1. Hardware Setup\nled = machine.Pin(2, machine.Pin.OUT)\nled_state = \"OFF\"\n\n# 2. Access Point Configuration\nap = network.WLAN(network.AP_IF)\nap.active(True)\nap.config(essid='esp32-iot', password='12345678')\n\nprint('AP Active. IP Address:', ap.ifconfig()[0])\n\n# 3. HTML UI (Lightweight UI/UX)\ndef web_page():\n    html = f\"\"\"\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <style>\n            body {{ font-family: Arial; text-align: center; background-color: #f4f4f9; color: #333; }}\n            .container {{ marginTop: 50px; padding: 20px; }}\n            .card {{ background: white; padding: 30px; border-radius: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: inline-block; }}\n            .btn {{ display: inline-block; padding: 15px 40px; font-size: 18px; cursor: pointer; text-decoration: none; border-radius: 10px; margin: 10px; border: none; transition: 0.3s; }}\n            .on {{ background-color: #4CAF50; color: white; }}\n            .off {{ background-color: #f44336; color: white; }}\n            .status {{ font-weight: bold; color: {\"#4CAF50\" if led_state == \"ON\" else \"#f44336\"}; }}\n        </style>\n    </head>\n    <body>\n        <div class=\"container\">\n            <div class=\"card\">\n                <h1>ESP32 Control</h1>\n                <p>LED Status: <span class=\"status\">{led_state}</span></p>\n                <a href=\"/?led=on\"><button class=\"btn on\">TURN ON</button></a>\n                <a href=\"/?led=off\"><button class=\"btn off\">TURN OFF</button></a>\n            </div>\n        </div>\n    </body>\n    </html>\n    \"\"\"\n    return html\n\n# 4. Web Server Logic\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\ns.bind(('', 80))\ns.listen(5)\n\nwhile True:\n    conn, addr = s.accept()\n    request = conn.recv(1024).decode('utf-8')\n    \n    # Handle LED logic\n    if \"/?led=on\" in request:\n        led.value(1)\n        led_state = \"ON\"\n    elif \"/?led=off\" in request:\n        led.value(0)\n        led_state = \"OFF\"\n    \n    # Send response\n    response = web_page()\n    conn.send('HTTP/1.1 200 OK\\nContent-Type: text/html\\nConnection: close\\n\\n')\n    conn.sendall(response)\n    conn.close()",
    "date": "2026-02-14"
}

/* 
   IMPORTANT: 
   You selected a local file: "1.jpeg"
   PLEASE COPY/MOVE this file into the "images" folder inside your website directory!
*/
	
];

// Helper to get all projects
function getAllProjects() {
    return projects;
}

// Helper to get project by ID
function getProjectById(id) {
    return projects.find(p => p.id === id);
}

// Helper to get projects by category
function getProjectsByCategory(category) {
    if (category === 'all') return projects;
    return projects.filter(p => p.category === category);
}


