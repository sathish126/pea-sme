// src/components/Team.js
import React from 'react';

// Combined data for Production Engineering Association (PEA) and Society of Manufacturing Engineers (SME)
const combinedMembers = [
    // Secretary
    { name: "NITIS PRABU M", organization: "PEA", role: "Secretary", image: "/img/Team/SEC/nitis_sec.jpg", linkedin: "https://linkedin.com/in/peasecretary" },
    { name: "ARUN K", organization: "SME", role: "Secretary", image: "/img/Team/SEC/arun_sec.png", linkedin: "https://linkedin.com/in/smesecetary" },

    // Joint Secretaries
    { name: "B VIKASHINI", organization: "PEA", role: "Joint Secretary", image: "/img/Team/JOINT_SEC/Vikashini.JPG", linkedin: "https://linkedin.com/in/joinsecretary1" },
    { name: "BALAJI C", organization: "PEA", role: "Joint Secretary", image: "/img/Team/JOINT_SEC/balaji.JPG", linkedin: "https://linkedin.com/in/joinsecretary2" },
    { name: "SUBIRAMANIAN V J", organization: "SME", role: "Joint Secretary", image: "/img/Team/JOINT_SEC/subiramanian.jpg", linkedin: "https://linkedin.com/in/smejoinsecretary1" },
    { name: "R S DIYA VISALI", organization: "SME", role: "Joint Secretary", image: "/img/Team/JOINT_SEC/Diya.jpg", linkedin: "https://linkedin.com/in/smejoinsecretary2" },

    // Senior Executives
    { name: "R R DHIVAGARAN", organization: "PEA", role: "Senior Executive", image: "/img/Team/SENIOR_EXE/dhivagar.JPG", linkedin: "https://linkedin.com/in/seniorexecutive1" },
    { name: "DHINNESH S", organization: "PEA", role: "Senior Executive", image: "/img/Team/SENIOR_EXE/dhinnesh.jpeg", linkedin: "https://linkedin.com/in/seniorexecutive2" },
    { name: "SHANMUGAM S", organization: "PEA", role: "Senior Executive", image: "/img/Team/SENIOR_EXE/shanmugam.jpg", linkedin: "https://linkedin.com/in/seniorexecutive3" },
    { name: "J DEVI SRI", organization: "PEA", role: "Senior Executive", image: "/img/Team/SENIOR_EXE/devisri.jpg", linkedin: "https://linkedin.com/in/seniorexecutive4" },
    { name: "NANDHAGOPAL S", organization: "SME", role: "Senior Executive", image: "/img/Team/SENIOR_EXE/nandhagopal.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive1" },
    { name: "KRUTHI T P", organization: "SME", role: "Senior Executive", image: "/img/Team/SENIOR_EXE/kruthi.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive2" },
    { name: "V JAYASENTHILNATHAN", organization: "SME", role: "Senior Executive", image: "/img/Team/SENIOR_EXE/senthi.jpg", linkedin: "https://linkedin.com/in/smeseniorexecutive3" },
    { name: "GOKUL RAMANA V", organization: "SME", role: "Senior Executive", image: "/img/Team/SENIOR_EXE/gokul.JPG", linkedin: "https://linkedin.com/in/smeseniorexecutive4" },

    // Junior Executives
    { name: "SUKANTH N R", organization: "PEA", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/Sukanth .jpg", linkedin: "https://linkedin.com/in/juniorexecutive1" },
    { name: "DEEPIKA S P", organization: "PEA", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/Dheepika.jpg", linkedin: "https://linkedin.com/in/juniorexecutive2" },
    { name: "NHARGUNA NANGAI M B", organization: "PEA", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/junior_executive3.jpg", linkedin: "https://linkedin.com/in/juniorexecutive3" },
    { name: "NIMESHA S", organization: "PEA", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/Nimesha.jpg", linkedin: "https://linkedin.com/in/juniorexecutive4" },
    { name: "AISHAA NIHAR Z", organization: "PEA", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/junior_executive5.jpg", linkedin: "https://linkedin.com/in/juniorexecutive5" },
    { name: "KANCIA ROSLIN MARY", organization: "PEA", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/Kancia.jpg", linkedin: "https://linkedin.com/in/juniorexecutive6" },
    { name: "RITHIKA G", organization: "SME", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/rithika.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive1" },
    { name: "VINOTHINI D", organization: "SME", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/Vinothini.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive2" },
    { name: "KRISITHA J S", organization: "SME", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/Krisitha.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive3" },
    { name: "MOHAMED VASEEM J", organization: "SME", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/Mohamed Vaseem.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive4" },
    { name: "MANJUSWETHA S V", organization: "SME", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/Manjuswetha.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive5" },
    { name: "KISHORE KANΝΑΝ Β", organization: "SME", role: "Junior Executive", image: "/img/Team/JUNIOR_EXE/kishorekannan.jpg", linkedin: "https://linkedin.com/in/smejuniorexecutive6" },

    // Common volunteers for both organizations
    { name: "THIRUSURIYAA S U", role: "Volunteer", image: "/img/volunteer1.jpg", linkedin: "https://linkedin.com/in/volunteer1" },
    { name: "N MUGILAN", role: "Volunteer", image: "/img/volunteer2.jpg", linkedin: "https://linkedin.com/in/volunteer2" },
    { name: "GIRIDHARAN T", role: "Volunteer", image: "/img/Team/VOLUNTEERS/Giri Dharnan.jpg", linkedin: "https://linkedin.com/in/volunteer3" },
    { name: "SABARISAN E",  role: "Volunteer", image: "/img/volunteer4.jpg", linkedin: "https://linkedin.com/in/volunteer4" },
    { name: "ADHIYAN KHAN A", role: "Volunteer", image: "/img/volunteer5.jpg", linkedin: "https://linkedin.com/in/volunteer5" },
    { name: "NEKA S", role: "Volunteer", image: "/img/Team/VOLUNTEERS/Neka.jpg", linkedin: "https://linkedin.com/in/volunteer6" },
    { name: "RIVALIN R",  role: "Volunteer", image: "/img/volunteer7.jpg", linkedin: "https://linkedin.com/in/volunteer7" },
    { name: "SRIVARDHNY D S", role: "Volunteer", image: "/img/volunteer8.jpg", linkedin: "https://linkedin.com/in/volunteer8" },
    { name: "ADITHYA R B", role: "Volunteer", image: "/img/volunteer9.jpg", linkedin: "https://linkedin.com/in/volunteer9" },
    { name: "SHARVESH D", role: "Volunteer", image: "/img/volunteer10.jpg", linkedin: "https://linkedin.com/in/volunteer10" },
];

// Group members by roles
// Group members by roles
const Team = () => {
    const groupByRole = (members) => {
        return members.reduce((groups, member) => {
            if (!groups[member.role]) {
                groups[member.role] = [];
            }
            groups[member.role].push(member);
            return groups;
        }, {});
    };
    
    const groupedMembers = groupByRole(combinedMembers);

    return (
        <section id="team" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
                {Object.keys(groupedMembers).map((role) => (
                    <div key={role} className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">{role}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {groupedMembers[role].map((member, index) => (
                                <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
                                <img src={member.image} alt={`${member.name}`} className="w-full h-40 object-cover rounded-lg" />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.organization}</p>
                                <a
                                    href={member.linkedin}
                                    className="text-blue-500 mt-2 inline-flex justify-center items-center mx-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;