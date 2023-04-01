import os
import json

imagePath = "../../../public/img/interior/Interior Residance/Altu Khan Jute Mills Limited (AKJML)"
LandscapeProjects = [
    {
        "id": "8",
        "title": "Office Room",
        "location": "Niketon, Dhaka",
        "type": "interior",
        "image": []
    }
]

# Get a list of all the image filenames in the specified directory
imageFilenames = os.listdir(imagePath)

# Add each image to the LandscapeProjects object
for filename in imageFilenames:
    LandscapeProjects[0]["image"].append({
        "original": imagePath + "/" + filename,
        "thumbnail": imagePath + "/" + filename
    })

# Print the resulting LandscapeProjects object
with open('output.json', 'w') as f:
    f.write(json.dumps(LandscapeProjects, indent=4))
