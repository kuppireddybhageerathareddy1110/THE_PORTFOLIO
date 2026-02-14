export const portfolioData = {
    profile: {
        name: "Kuppireddy Bhageeratha Reddy",
        title: "Aspiring Data Scientist & AI Developer",
        typedStrings: [
            "import tensorflow as tf\nfrom sklearn import preprocessing\nmodel = tf.keras.Sequential([...])\ndef train_model(data):\n    # Neural Network for Sentiment Analysis",
            "from transformers import pipeline\nnlp = pipeline(\"question-answering\", model=\"BioBERT\")\ndef medical_chatbot(question):\n    return nlp(question=question, context=\"medical_data\")\n# AI-Powered Medical Chatbot",
            "import torch\nmodel = torch.nn.LSTM(input_size=128, hidden_size=64)\ndef process_sequence(data):\n    return model(data)\n# LSTM for Time-Series Analysis"
        ],
        bio: "Aspiring Data Scientist specializing in NLP and Deep Learning. I craft AI-powered solutions using Python, Java, Flask, and MongoDB. Inspired by the precision of F1, the depth of Interstellar, and the layered complexity of Inception, I build systems that push the boundaries of intelligence.",
        heroMoto: "Speed of F1. Spirit of Zanpakuto. Dreaming of the Grand Line. Building intelligent systems inspired by the cosmos."
    },
    skills: {
        technical: [
            { name: "Python", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Deep Learning", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
            { name: "NLP", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
            { name: "JavaScript", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", level: 78, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Flask/Django", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "Java", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "TypeScript", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "C++", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "SQL", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ],
        tools: [
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
            { name: "Tableau", icon: "https://img.icons8.com/color/48/000000/tableau-software.png" },
            { name: "Power BI", icon: "https://img.icons8.com/color/48/000000/power-bi.png" }
        ],
        libraries: [
            { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
            { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo.svg" },
            { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
            { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
            { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
            { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
            { name: "Seaborn", icon: "https://seaborn.pydata.org/_images/logo-tall-lightbg.svg" },
            { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
            { name: "NLTK", icon: "https://img.icons8.com/ios-filled/50/4ecdc4/book.png" }
        ]
    },
    experience: [
        {
            title: "Freelancer",
            period: "2023 - Present",
            description: "Developed AI-driven web applications (sentiment analysis, chatbots) using Flask & deep learning. Collaborated with clients for scalable solutions, achieving 90%+ NLP accuracy. Deployed projects to cloud platforms."
        }
    ],
    education: [
        {
            title: "VIT-AP University",
            period: "2022 - 2026",
            description: "B.Tech Computer Science, CGPA: 8.87"
        },
        {
            title: "Sri Chaitanya Junior College",
            period: "2020 - 2022",
            description: "Intermediate, 96.7%"
        },
        {
            title: "Sri Chaitanya School",
            period: "2020",
            description: "High School, 99.6%"
        }
    ],
    projects: [
        {
            title: "Sentiment Analysis",
            description: "Full-stack Flask application using VADER and LIME for real-time sentiment analysis with interactive visualizations.",
            technologies: ["Python", "Flask", "VADER", "LIME", "NLP"],
            github: "https://github.com/kuppireddybhageerathareddy1110/mm",
            live: "https://mm-rho-seven.vercel.app",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "Flask", "NLP"]
        },
        {
            title: "Medical Chatbot",
            description: "Deep learning chatbot using SBERT and BioBERT for intelligent health query answering with context-aware responses.",
            technologies: ["Python", "SBERT", "BioBERT", "Transformers"],
            github: "https://github.com/kuppireddybhageerathareddy1110/bot1",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "Deep Learning", "NLP"]
        },
        {
            title: "Text-to-Image Generator",
            description: "Research project exploring realistic and consistent text-to-image generation using multimodal AI models with deep learning pipelines.",
            technologies: ["Python", "PyTorch", "Diffusion Models", "Jupyter"],
            github: "https://github.com/kuppireddybhageerathareddy1110/Towards-Realistic-and-Consistent-Text-to-Image-Generation-with-Multimodal-AI",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
            tags: ["Deep Learning", "AI Research"]
        },
        {
            title: "Biomass Analysis Platform",
            description: "Python-based research platform for biomass data analysis and prediction using machine learning models.",
            technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
            github: "https://github.com/kuppireddybhageerathareddy1110/biomass",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "Data Science"]
        },
        {
            title: "AI Document Assistant",
            description: "Intelligent document analysis tool powered by AI for smart document processing and question answering.",
            technologies: ["Python", "NLP", "Streamlit", "LLM"],
            github: "https://github.com/kuppireddybhageerathareddy1110/ai-doc",
            live: "https://ai-doc-2yxn.vercel.app/",
            image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1708282655422/95b14d23-e51a-4562-9825-eaf2536d04dc.jpeg?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "AI", "NLP"]
        },
        {
            title: "Financial Risk Analytics Platform",
            description: "Full-stack analytics dashboard for financial risk assessment with real-time data visualization and predictive modeling.",
            technologies: ["JavaScript", "React", "Node.js", "D3.js"],
            github: "https://github.com/kuppireddybhageerathareddy1110/Financial-Risk-Analytics-Platform",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
            tags: ["JavaScript", "Full Stack", "Data Science"]
        },
        {
            title: "NSL-KDD Network Intrusion Detection",
            description: "Machine learning-based network intrusion detection system with interactive visualization dashboard built on the NSL-KDD dataset.",
            technologies: ["JavaScript", "React", "Python", "ML"],
            github: "https://github.com/kuppireddybhageerathareddy1110/NSL_KDD",
            live: "https://nsl-kdd.vercel.app",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            tags: ["JavaScript", "Cybersecurity", "ML"]
        },
        {
            title: "Enterprise Decision Intelligence System",
            description: "AI-powered decision support system for enterprise-level strategic planning and data-driven decision making.",
            technologies: ["Python", "Flask", "ML", "Analytics"],
            github: "https://github.com/kuppireddybhageerathareddy1110/Enterprise-Decision-Intelligence-System",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "AI", "Enterprise"]
        },
        {
            title: "Food Delivery App",
            description: "Full-stack food delivery application with modern UI, cart management, order tracking, and restaurant browsing.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/kuppireddybhageerathareddy1110/food-del-app",
            live: "https://food-del-app-xi.vercel.app",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
            tags: ["JavaScript", "Full Stack", "React"]
        },
        {
            title: "GlobeTrek — Travel Explorer",
            description: "Interactive travel exploration platform with destination discovery, trip planning, and beautiful UI.",
            technologies: ["React", "JavaScript", "API Integration"],
            github: "https://github.com/kuppireddybhageerathareddy1110/globe-trek",
            live: "https://globetrek-lac.vercel.app",
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
            tags: ["JavaScript", "React", "Full Stack"]
        },
        {
            title: "XenoFDE — CRM Platform",
            description: "Customer relationship management platform with campaign management, audience segmentation, and analytics.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/kuppireddybhageerathareddy1110/xeno-fde",
            live: "https://xeno-fde-pi.vercel.app",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            tags: ["JavaScript", "Full Stack"]
        },
        {
            title: "Heart Disease Prediction",
            description: "Ensemble ML models (Random Forest, Bagging) achieving 81%+ accuracy on heart disease dataset with tuned hyperparameters.",
            technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
            github: "https://github.com/kuppireddybhageerathareddy1110/heart-disease-ml",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "ML", "Data Science"]
        },
        {
            title: "Task Manager App",
            description: "Full-featured task management application with drag-and-drop, priority sorting, and status tracking built with TypeScript.",
            technologies: ["TypeScript", "React", "Node.js"],
            github: "https://github.com/kuppireddybhageerathareddy1110/task-manager",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
            tags: ["TypeScript", "Full Stack"]
        },
        {
            title: "Drowsiness Detection System",
            description: "Real-time OpenCV system on Raspberry Pi for drowsiness detection using facial landmark analysis.",
            technologies: ["Python", "OpenCV", "Raspberry Pi", "dlib"],
            github: "https://github.com/kuppireddybhageerathareddy1110/ECS-1-DROWSINESS-DETECTION-SYSTEM",
            image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800",
            tags: ["Python", "Computer Vision", "IoT"]
        }
    ],
    badges: [
        { name: "Data Science with Python", image: "/badges/applied-data-science-with-python-level-2.png", description: "Python & statistical analysis." },
        { name: "Deep Learning Using Tensorflow", image: "/badges/deep-learning-using-tensorflow.png", description: "Expertise in neural networks and TensorFlow." },
        { name: "Data Visualization with R", image: "/badges/data-visualization-with-r.png", description: "Proficiency in R for Visualization." },
        { name: "AWS Academy Cloud Architecting", image: "/badges/aws-academy-graduate-aws-academy-cloud-architecting.png", description: "Cloud Architecting." },
        { name: "OCI Gen AI Professional", image: "/badges/OCI25DSOCP-Photoroom.png", description: "Gen AI." },
        { name: "OCI Data Science Professional", image: "/badges/OCI25DSOCP-Photoroom.png", description: "Data Science." }
    ],
    funFacts: [
        { title: "F1 Fan", icon: "Rocket", description: "Speed enthusiast, dreaming of the Grand Line like Luffy!" },
        { title: "AI Dreamer", icon: "Brain", description: "Building AI that enhances human potential." },
        { title: "Code Lover", icon: "Code", description: "Python is my wand, data is my magic." },
        { title: "Anime Fan", icon: "Heart", description: "Bleach and One Piece fuel my creativity." }
    ]
};
