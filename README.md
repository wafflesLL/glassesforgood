# How to use

1. Use VS Code or Cursor to make use of the devcontainer.json I set up.
2. If you are a **Windows** user you must clone the repository to your wsl filesystem for quick file access.
3. I suggest turning off resource efficiency in Docker Desktop, or adjusting your CPU allocation as you see fit.
4. Navigate to the repository's directory and run ```code .``` or ```cursor .```.
5. When the program opens it will likely suggest for you to "Reopen in Container", but if you turned off suggestions, do ```Ctrl (or Cmd) + Shift + P``` and do "Dev Containers: Reopen in Container".
6. Run ```npm run dev``` and it should host the project on [localhost][http://localhost:3000].
