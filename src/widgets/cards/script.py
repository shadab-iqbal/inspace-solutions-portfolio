import os
import json

imagePath = "../../../public/img/architecture/Nator"
directPath = "../../../img/architecture/Nator"

LandscapeProjects = [
    {
        "id": "5",
        "title": "Residence",
        "location": "Dhaka",
        "type": "architecture",
        "image": []
    }
]

# Get a list of all the image filenames in the specified directory
imageFilenames = os.listdir(imagePath)

# Add each image to the LandscapeProjects object
for filename in imageFilenames:
    LandscapeProjects[0]["image"].append({
        "original": directPath + "/" + filename,
        "thumbnail": directPath + "/" + filename
    })

# Print the resulting LandscapeProjects object
with open('output.json', 'w') as f:
    f.write(json.dumps(LandscapeProjects, indent=4))
