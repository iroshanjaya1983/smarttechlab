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
{
    "id": "1771080101770",
    "title": "abcdef",
    "category": "iot",
    "shortDesc": "abcdef",
    "fullDesc": "faerterghdfsgfyry",
    "image": "images/Arrival Paging Board.png",
    "techStack": [
        ""
    ],
    "codeSnippet": "",
    "date": "2026-04-02"
}

/* 
   IMPORTANT: 
   You selected a local file: "Arrival Paging Board.png"
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
