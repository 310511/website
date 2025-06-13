# Cooter - Orthopedic Solutions Website

A modern, responsive website for Cooter's orthopedic solutions, built with Streamlit.

## Features

- Responsive design that works on all devices
- Interactive components
- Contact form
- Product gallery with category filtering
- Service listings
- About page with team information
- Easy navigation with sidebar

## Tech Stack

- Streamlit
- Python
- Pandas
- Pillow (PIL)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Create a virtual environment (optional but recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the application:
```bash
streamlit run app.py
```

5. Open [http://localhost:8501](http://localhost:8501) with your browser to see the result.

## Project Structure

```
.
├── app.py              # Main Streamlit application
├── requirements.txt    # Python dependencies
└── README.md          # Project documentation
```

## Development

- `streamlit run app.py` - Start development server
- `streamlit run app.py --server.port 8502` - Run on a different port
- `streamlit run app.py --server.address localhost` - Run on localhost only

## Deployment

The application can be deployed on Streamlit Cloud:

1. Push your code to a GitHub repository
2. Go to [share.streamlit.io](https://share.streamlit.io)
3. Sign in with your GitHub account
4. Click "New app"
5. Select your repository, branch, and main file (app.py)
6. Click "Deploy"

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please contact:
- Email: info@cooter.shop
- Phone: 9818851538
