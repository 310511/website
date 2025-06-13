import streamlit as st
import pandas as pd
from PIL import Image
import base64
from io import BytesIO

# Page configuration
st.set_page_config(
    page_title="Sterling Biosciences (Cooter) - Orthopedic Solutions",
    page_icon="🦿",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
    <style>
    /* Main container */
    .main {
        padding: 0rem 1rem;
        background-color: white;
    }
    
    /* Headers */
    h1 {
        color: #1E3A8A;
        font-size: 3.5rem !important;
        font-weight: 700 !important;
        margin-bottom: 1rem !important;
        text-align: center;
    }
    
    h2 {
        color: #1E3A8A;
        font-size: 2.5rem !important;
        font-weight: 600 !important;
        margin-bottom: 0.75rem !important;
        text-align: center;
    }
    
    h3 {
        color: #1E3A8A;
        font-size: 2rem !important;
        font-weight: 600 !important;
        margin-bottom: 0.5rem !important;
    }
    
    /* Cards */
    .stButton>button {
        width: 100%;
        background-color: #1E3A8A;
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
    }
    
    .stButton>button:hover {
        background-color: #2563EB;
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    /* Sidebar */
    .css-1d391kg {
        background-color: #1E3A8A;
        color: white;
    }
    
    .sidebar .sidebar-content {
        background-color: #1E3A8A;
    }
    
    /* Custom card style */
    .card {
        background-color: white;
        border-radius: 1rem;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        text-align: center;
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
    
    /* Form elements */
    .stTextInput>div>div>input {
        border-radius: 0.5rem;
        border: 2px solid #E5E7EB;
        padding: 0.75rem;
    }
    
    .stTextArea>div>div>textarea {
        border-radius: 0.5rem;
        border: 2px solid #E5E7EB;
        padding: 0.75rem;
    }
    
    /* Success message */
    .stSuccess {
        background-color: #D1FAE5;
        color: #065F46;
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 1rem 0;
    }

    /* Stats */
    .stats {
        text-align: center;
        padding: 2rem;
    }
    
    .stats h4 {
        font-size: 2.5rem !important;
        color: #1E3A8A;
        margin: 0;
    }
    
    .stats p {
        color: #4B5563;
        font-size: 1.1rem;
        margin: 0.5rem 0;
    }

    /* Testimonials */
    .testimonial {
        background-color: #F3F4F6;
        padding: 2rem;
        border-radius: 1rem;
        margin: 1rem 0;
    }
    
    .testimonial p {
        font-style: italic;
        color: #4B5563;
        font-size: 1.1rem;
    }
    
    .testimonial .author {
        font-weight: 600;
        color: #1E3A8A;
    }
    </style>
    """, unsafe_allow_html=True)

# Navigation
def navigation():
    st.sidebar.markdown("""
        <div style='text-align: center; padding: 1rem 0;'>
            <h1 style='color: white; font-size: 1.5rem; margin: 0;'>Sterling Biosciences</h1>
            <p style='color: #E5E7EB; font-size: 0.9rem; margin: 0.5rem 0;'>(Cooter)</p>
        </div>
    """, unsafe_allow_html=True)
    
    st.sidebar.markdown("---")
    
    page = st.sidebar.radio("", ["Home", "Services", "Gallery", "About", "Contact"])
    
    st.sidebar.markdown("---")
    
    st.sidebar.markdown("""
        <div style='text-align: center; padding: 1rem 0;'>
            <p style='color: #E5E7EB; font-size: 0.9rem;'>Contact Us</p>
            <p style='color: #E5E7EB; font-size: 0.9rem;'>info@cooter.shop</p>
            <p style='color: #E5E7EB; font-size: 0.9rem;'>9818851538</p>
        </div>
    """, unsafe_allow_html=True)
    
    return page

# Home Page
def home_page():
    st.markdown("""
        <div style='text-align: center; padding: 2rem 0;'>
            <h1>Precision Care for Every Step</h1>
            <p style='font-size: 1.5rem; color: #4B5563;'>Orthopedic Solutions</p>
        </div>
    """, unsafe_allow_html=True)
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("""
            <div class='card'>
                <h3>Reliable Braces and Supports</h3>
                <p style='color: #4B5563; font-size: 1.1rem;'>Professional-grade orthopedic braces and supports for optimal recovery and comfort.</p>
            </div>
        """, unsafe_allow_html=True)
        if st.button("Shop Now", key="home_shop"):
            st.session_state.page = "Services"
    
    with col2:
        st.markdown("""
            <div class='card'>
                <h3>Mobility Aids for Recovery</h3>
                <p style='color: #4B5563; font-size: 1.1rem;'>Advanced mobility solutions designed to support your journey to better health.</p>
            </div>
        """, unsafe_allow_html=True)
        if st.button("Explore More", key="home_explore"):
            st.session_state.page = "Gallery"

    st.markdown("""
        <div style='text-align: center; margin: 3rem 0;'>
            <h2>Why Choose Us?</h2>
        </div>
    """, unsafe_allow_html=True)

    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown("""
            <div class='stats'>
                <h4>150+</h4>
                <p>Trusted by Experts</p>
            </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
            <div class='stats'>
                <h4>15</h4>
                <p>Quality Assured</p>
            </div>
        """, unsafe_allow_html=True)
    
    with col3:
        st.markdown("""
            <div class='stats'>
                <h4>★★★★★</h4>
                <p>Customer Satisfaction</p>
            </div>
        """, unsafe_allow_html=True)

    st.markdown("""
        <div style='text-align: center; margin: 3rem 0;'>
            <h2>What Our Customers Say</h2>
        </div>
    """, unsafe_allow_html=True)

    col1, col2 = st.columns(2)
    with col1:
        st.markdown("""
            <div class='testimonial'>
                <p>"Cooter's orthopedic devices transformed my recovery journey. Highly recommend their quality and customer service!"</p>
                <p class='author'>- Rajesh Kumar</p>
            </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
            <div class='testimonial'>
                <p>"The braces from Cooter provided excellent support and comfort during my rehabilitation. Truly a game changer!"</p>
                <p class='author'>- Anita Singh</p>
            </div>
        """, unsafe_allow_html=True)

# Services Page
def services_page():
    st.markdown("""
        <div style='text-align: center; padding: 2rem 0;'>
            <h1>Our Services</h1>
            <p style='font-size: 1.5rem; color: #4B5563;'>Innovative Mobility Solutions</p>
        </div>
    """, unsafe_allow_html=True)
    
    services = [
        {
            "title": "Braces & Supports",
            "description": "Professional-grade orthopedic braces and supports for optimal recovery.",
            "icon": "🦿"
        },
        {
            "title": "Mobility Aids",
            "description": "Advanced mobility solutions for enhanced independence and comfort.",
            "icon": "🦼"
        },
        {
            "title": "Surgical Implants",
            "description": "High-quality surgical implants for various orthopedic procedures.",
            "icon": "🔧"
        }
    ]
    
    cols = st.columns(3)
    for idx, service in enumerate(services):
        with cols[idx]:
            st.markdown(f"""
                <div class='card'>
                    <div style='font-size: 3rem; margin-bottom: 1rem;'>{service['icon']}</div>
                    <h3>{service['title']}</h3>
                    <p style='color: #4B5563; font-size: 1.1rem;'>{service['description']}</p>
                </div>
            """, unsafe_allow_html=True)
            st.button("Learn More", key=f"service_{idx}")

# Gallery Page
def gallery_page():
    st.markdown("""
        <div style='text-align: center; padding: 2rem 0;'>
            <h1>Our Gallery</h1>
            <p style='font-size: 1.5rem; color: #4B5563;'>Explore our range of orthopedic products</p>
        </div>
    """, unsafe_allow_html=True)
    
    categories = ["All", "Braces & Supports", "Mobility Aids", "Surgical Implants"]
    selected_category = st.selectbox("Select Category", categories)
    
    gallery_items = [
        {
            "category": "Braces & Supports",
            "title": "Knee Brace",
            "description": "Advanced knee support for optimal recovery"
        },
        {
            "category": "Mobility Aids",
            "title": "Walking Aid",
            "description": "Premium walking support system"
        },
        {
            "category": "Surgical Implants",
            "title": "Joint Replacement",
            "description": "High-quality joint replacement solutions"
        }
    ]
    
    filtered_items = [item for item in gallery_items 
                     if selected_category == "All" or item["category"] == selected_category]
    
    cols = st.columns(3)
    for idx, item in enumerate(filtered_items):
        with cols[idx % 3]:
            st.markdown(f"""
                <div class='card'>
                    <h3>{item['title']}</h3>
                    <p style='color: #4B5563; font-size: 1.1rem;'>{item['description']}</p>
                </div>
            """, unsafe_allow_html=True)
            st.button("View Details", key=f"gallery_{idx}")

# About Page
def about_page():
    st.markdown("""
        <div style='text-align: center; padding: 2rem 0;'>
            <h1>About Sterling Biosciences (Cooter)</h1>
            <p style='font-size: 1.5rem; color: #4B5563;'>Dedicated to enhancing lives with innovative orthopedic solutions</p>
        </div>
    """, unsafe_allow_html=True)
    
    st.markdown("""
        <div class='card' style='margin-bottom: 2rem;'>
            <h2>Our Mission</h2>
            <p style='color: #4B5563; font-size: 1.2rem;'>
                Dedicated to enhancing lives with innovative orthopedic solutions for pain relief, recovery, and posture support, 
                we serve patients and healthcare professionals through our accessible online store.
            </p>
        </div>
    """, unsafe_allow_html=True)
    
    col1, col2, col3 = st.columns(3)
    with col1:
        st.markdown("""
            <div class='card'>
                <div style='font-size: 2.5rem; margin-bottom: 1rem;'>🎯</div>
                <h3>Our Vision</h3>
                <p style='color: #4B5563; font-size: 1.1rem;'>To be the leading provider of innovative orthopedic solutions worldwide.</p>
            </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
            <div class='card'>
                <div style='font-size: 2.5rem; margin-bottom: 1rem;'>💡</div>
                <h3>Our Values</h3>
                <p style='color: #4B5563; font-size: 1.1rem;'>Quality, innovation, and patient-centered care drive everything we do.</p>
            </div>
        """, unsafe_allow_html=True)
    
    with col3:
        st.markdown("""
            <div class='card'>
                <div style='font-size: 2.5rem; margin-bottom: 1rem;'>🤝</div>
                <h3>Our Promise</h3>
                <p style='color: #4B5563; font-size: 1.1rem;'>To provide exceptional care and support throughout your recovery journey.</p>
            </div>
        """, unsafe_allow_html=True)

# Contact Page
def contact_page():
    st.markdown("""
        <div style='text-align: center; padding: 2rem 0;'>
            <h1>Contact Us</h1>
            <p style='font-size: 1.5rem; color: #4B5563;'>Get in touch with our team</p>
        </div>
    """, unsafe_allow_html=True)
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("""
            <div class='card'>
                <h3>Send us a Message</h3>
            </div>
        """, unsafe_allow_html=True)
        with st.form("contact_form"):
            name = st.text_input("Name")
            email = st.text_input("Email")
            phone = st.text_input("Phone")
            message = st.text_area("Message")
            submit = st.form_submit_button("Submit your inquiry now")
            if submit:
                st.success("Thank you for your message. We will get back to you soon!")
    
    with col2:
        st.markdown("""
            <div class='card'>
                <h3>Contact Information</h3>
                <div style='margin: 1rem 0;'>
                    <p style='font-weight: 600; color: #1E3A8A;'>Email</p>
                    <p style='color: #4B5563;'>info@cooter.shop</p>
                </div>
                <div style='margin: 1rem 0;'>
                    <p style='font-weight: 600; color: #1E3A8A;'>Phone</p>
                    <p style='color: #4B5563;'>9818851538</p>
                </div>
            </div>
        """, unsafe_allow_html=True)
        
        st.markdown("""
            <div class='card' style='margin-top: 1rem;'>
                <h3>Business Hours</h3>
                <div style='margin: 1rem 0;'>
                    <p style='color: #4B5563;'>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p style='color: #4B5563;'>Saturday: 10:00 AM - 4:00 PM</p>
                    <p style='color: #4B5563;'>Sunday: Closed</p>
                </div>
            </div>
        """, unsafe_allow_html=True)

# Main App
def main():
    if 'page' not in st.session_state:
        st.session_state.page = "Home"
    
    page = navigation()
    
    if page == "Home":
        home_page()
    elif page == "Services":
        services_page()
    elif page == "Gallery":
        gallery_page()
    elif page == "About":
        about_page()
    elif page == "Contact":
        contact_page()

if __name__ == "__main__":
    main() 