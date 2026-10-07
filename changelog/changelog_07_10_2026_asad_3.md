# Labs index and package-ready Autograde (PR #3)

- **Labs table:** the README now opens with all 14 labs, the week each one comes out, and a link to its task sheet, so students no longer have to hunt for them.
- **Autograde installs packages:** Labs 11–14 (Express, MongoDB, React, Django) need npm or pip packages. Autograde installs the exact versions from the course repo's own copy, with install scripts turned off, so a Pull Request cannot change which packages run. It also runs Python tests for Lab 14.
- **Safer defaults:** `.env`, local SQLite databases and Python caches are ignored by Git, so a database password is not committed by accident.
