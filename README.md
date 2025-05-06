# ichatbio-docs

Documentation and blog for [iChatBio](https://ichatbio.org). 

## Setup

Requirements:
- python3
- pip

```bash
git clone https://github.com/acislab/ichatbio-docs.git
cd ichatbio-docs/
virtualenv venv --python=python3.12
source venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```
To deploy changes, commit locally then run:

```bash
mkdocs gh-deploy
```

This will automatically rebuild the site. 

