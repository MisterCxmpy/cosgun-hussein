import os
import re

dir_path = "./themes"

pattern = r".+\.css$"

new_property = """

"""

for file_name in os.listdir(dir_path):
    if re.match(pattern, file_name):
        with open(os.path.join(dir_path, file_name), "r") as f:
            file_contents = f.read()

        if re.search(re.escape(new_property), file_contents):
            print(f"{file_name} already contains the new property")
        else:
            new_contents = file_contents.strip() + "\n" + new_property

            with open(os.path.join(dir_path, file_name), "w") as f:
                f.write(new_contents)
            print(f"{file_name} updated with the new property")