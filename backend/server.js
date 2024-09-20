const express = require('express');
const app = express();
const cors = require('cors');
const plansModel = require('./models/plans'); // Ensure this path is correct

const featuresRoute = require('./routes/feature'); // Adjust the path as necessary

// Middleware
app.use(express.json());

// Configure CORS
app.use(cors({
    origin: 'http://localhost:3004', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    credentials: true
}));

app.get("/featuresInitiation", async (req, res) => {
    try {
        const basicFeatures = [
            {
                category: "Job Posting",
                items: [
                    "Ability to post up to 5 job listings per month.",
                    "Basic job templates for quick job creation (pre-filled fields such as role, industry, skills required)."
                ]
            },
            {
                category: "Candidate Search",
                items: [
                    "Access to the candidate database with basic filtering options (location, education level, and work experience)."
                ]
            },
            {
                category: "Candidate Shortlisting",
                items: [
                    "Basic shortlisting functionality to mark potential candidates for a specific role."
                ]
            },
            {
                category: "Job Application Tracking",
                items: [
                    "Basic dashboard to track the number of applications received per job post and view candidate details."
                ]
            },
            {
                category: "Interview Scheduling",
                items: [
                    "Recruiters can request interview slots with candidates through an integrated calendar."
                ]
            },
            {
                category: "Bulk Messaging",
                items: [
                    "Ability to send bulk emails to shortlisted candidates to schedule interviews or request more details."
                ]
            },
            {
                category: "Document Viewing & Verification",
                items: [
                    "Basic document viewing for resumes, cover letters, and certifications.",
                    "Up to 5GB of document storage for recruiter records."
                ]
            },
            {
                category: "Analytics",
                items: [
                    "Basic Job Performance Analytics: View the number of views and applications per job post."
                ]
            },
            {
                category: "Support",
                items: [
                    "Email Support for any issues or queries related to the portal."
                ]
            }
        ];

        const premiumFeatures = [
         {
            category:"All Basic Plans"
         },
            {
                category: "Advanced Job Management",
                items: [
                    "Increased Job Post Limit.",
                    "Ability to post up to 15 job listings per month, with customized job post templates for different industries."
                ]
            },
            {
                category: "Advanced Candidate Search",
                items: [
                    "Access to more comprehensive filtering options like industry experience, specific skill sets, salary expectations, and availability."
                ]
            },
            {
                category: "Custom Job Alerts",
                items: [
                    "Set custom alerts for when candidates with specific skills and qualifications match newly posted job listings."
                ]
            },
            {
                category: "Candidate Profile Recommendations",
                items: [
                    "Receive smart recommendations of potential candidates based on job descriptions and past hiring behavior."
                ]
            },
            {
                category: "Unlimited Shortlisting",
                items: [
                    "Unlimited shortlisting options to better manage candidate pipelines for each job role."
                ]
            },
            {
                category: "In-Depth Candidate Profiles",
                items: [
                    "Access to expanded candidate profiles, including work samples, certifications, and portfolio links."
                ]
            },
            {
                category: "Advanced Candidate Engagement Tools",
                items: [
                    "Video Interview Scheduling: Schedule and conduct video interviews directly through the portal using integrated video conferencing tools (e.g., Zoom, Google Meet, or WebRTC).",
                    "Custom Screening Questions: Add custom screening questions to job posts to pre-qualify candidates before shortlisting.",
                    "Candidate Application Notes: Leave detailed notes on candidates and track feedback from team members during the shortlisting and interview process."
                ]
            },
            {
                category: "Document Management & Verification",
                items: [
                    "Bulk Document Uploads: Upload multiple documents for each job role (e.g., job descriptions, interview guides, and offer letters).",
                    "Candidate Document Verification: Request document verification for shortlisted candidates (e.g., ID proof, academic certificates, etc.)."
                ]
            },
            {
                category: "Recruiter Dashboard Enhancements",
                items: [
                    "Customizable Job Dashboards: Track job post performance, candidate pipelines, and interview schedules in a personalized dashboard.",
                    "In-Depth Job Analytics: View detailed metrics on candidate sources, job post engagement, and application conversion rates."
                ]
            },
            {
                category: "Branding & Communication",
                items: [
                    "Custom Email Templates: Access to branded email templates to communicate with candidates professionally.",
                    "Bulk Notifications: Send bulk SMS and email notifications to candidates regarding job updates or interview requests."
                ]
            },
            {
                category: "Support",
                items: [
                    "Priority Email and Chat Support: Faster response times for technical and account-related issues."
                ]
            }
        ];

        const vipFeatures = [
            {
                category:"All Premium Plans"
             },
            {
                category: "Unlimited Job Management & Posts",
                items: [
                    "Unlimited Job Postings: Post an unlimited number of jobs per month, with no restrictions on industries or role types.",
                    "Branded Job Listings: Customize job postings with your company logo and branding to attract more candidates."
                ]
            },
            {
                category: "AI-Driven Candidate Matching",
                items: [
                    "AI-Powered Candidate Suggestions: Utilize an AI algorithm to suggest the best-fit candidates based on job descriptions and recruiter preferences.",
                    "Predictive Analytics: Predict candidate success rates based on previous job placements, skillset match, and job description analysis.",
                    "Candidate Comparison: Side-by-side candidate comparison tool to evaluate multiple profiles simultaneously based on qualifications, experience, and skill levels."
                ]
            },
            {
                category: "Exclusive Candidate Pools",
                items: [
                    "Verified Candidate Access: Access to a pool of pre-verified candidates (background-checked for education, work experience, and ID verification).",
                    "Candidate Badging: Exclusive access to candidates with special certifications or awards (e.g., industry certifications, specialized training)."
                ]
            },
            {
                category: "Enhanced Collaboration Tools",
                items: [
                    "Team Collaboration Features: Share candidate profiles, interview notes, and job role insights with hiring teams for better decision-making.",
                    "Role-Based Access: Assign different levels of access to team members, including job post editors, candidate reviewers, and interview schedulers."
                ]
            },
            {
                category: "Video Interviews & Assessments",
                items: [
                    "Integrated Video Assessments: Use pre-recorded video assessments or live video interviews to evaluate candidates.",
                    "Interview Feedback Tools: Collect structured feedback from interviewers and team members during video interviews.",
                    "Automated Follow-Up: Automatically send follow-up emails or notifications to candidates after interviews."
                ]
            },
            {
                category: "Branding & Customization",
                items: [
                    "Company Profile & Job Branding: Customize your recruiter profile with a company overview, job culture, and employee testimonials.",
                    "Custom Career Page Integration: Integrate the RMS with your company’s career page to post jobs and receive applications directly."
                ]
            },
            {
                category: "Comprehensive Analytics & Insights",
                items: [
                    "Advanced Reporting Tools: Generate detailed reports on job post performance, candidate engagement, time-to-hire metrics, and recruiter team efficiency.",
                    "Hiring Trends Analysis: Analyze hiring trends over time, including the effectiveness of sourcing channels, candidate demographics, and application conversion rates."
                ]
            },
            {
                category: "Priority Features",
                items: [
                    "VIP Support: Access to a dedicated account manager for onboarding and technical assistance.",
                    "Custom API Integrations: API integrations with third-party ATS, CRM, or HRMS tools for seamless data transfer and workflow management."
                ]
            }
        ];

        // Create Feature Documents for Each Plan
        const createdFeatures = await plansModel.create([
            {
                plan: "Basic",
                price: 20000,
                features: basicFeatures
            },
            {
                plan: "Premium",
                price: 40000,
                features: premiumFeatures
            },
            {
                plan: "VIP",
                price: 70000,
                features: vipFeatures
            }
        ]);

        res.status(201).json({
            message: "Features created successfully",
            data: createdFeatures
        });

        console.log(createdFeatures);

    } catch (error) {
        console.error("Error creating features:", error);
        res.status(500).json({ message: "An error occurred while creating features." });
    }
});


app.use(featuresRoute);

// Start the server (ensure to set your preferred port)
const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
