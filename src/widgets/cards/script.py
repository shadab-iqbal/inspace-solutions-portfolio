import os
import json

imagePath = "../../../public/img/landscape/Subarnabhumi Resort- Open Deak with Juicebar"
LandscapeProjects = [
    {
        "id": "7",
        "title": "Subarnabhumi Resort Deck",
        "location": "Gazaria",
        "type": "landscape",
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