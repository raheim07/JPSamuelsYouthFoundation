import os

def batch_rename_files(folder_path, prefix="photo"):
    """
    Renames files in a folder to:
    image-1.jpg, image-2.jpg, etc.
    """

    # Check if directory exists
    if not os.path.exists(folder_path):
        print(f"Directory '{folder_path}' not found.")
        return

    # Get only files (ignore folders)
    files = [
        f for f in os.listdir(folder_path)
        if os.path.isfile(os.path.join(folder_path, f))
    ]

    # Optional: sort files alphabetically
    files.sort()

    # Rename files
    for i, filename in enumerate(files, start=1):

        # Keep original extension
        file_ext = os.path.splitext(filename)[1]

        # Create new filename
        new_name = f"{prefix}-{i}{file_ext}"

        # Full paths
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_name)

        # Skip if same name
        if old_file == new_file:
            continue

        try:
            os.rename(old_file, new_file)
            print(f"Renamed: {filename} -> {new_name}")

        except Exception as e:
            print(f"Error renaming {filename}: {e}")


# --- Configuration ---
folder_to_process = r"C:\Users\rahei\Documents\Raheim's Development\JPSYF Website\public\gallery"

# Run
if __name__ == "__main__":
    batch_rename_files(folder_to_process)