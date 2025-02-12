// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './ProfileForm.css'
import React from "react";
import { useState, useEffect } from 'react';
import { User, Upload, Mail, Phone, Book, Code, Briefcase} from 'lucide-react';
// import { Card, CardHeader, CardContent} from '@/components/ui/card';

  const ProfileCreation = () =>
  {
    const [profile, setProfile] = useState(
      {
        //Array for personal information
        personalInfo:
        {
          fullName: '',
          email: '',
          phone: '',
          about: ''
        },
        //Array for the skills
        skills: [''],
        //Array for the user's projects
        projects:[
          {
            title: '',
            description: '',
            technologies: '',
            link: ''
          }]
        //CV URL ??????????????????????????????????
        // cvUrl: '',
      });

      //Able to edit the form.
      const [isEditing, setIsEditing] = useState(true);

      //handling the personal information taken from the input field
      const handlePersonalInfoChange = (e) =>
      {
        const { name, value} = e.target;

        //setting the profile
        setProfile(prev => (
          {
            ...prev,
            personalInfo:
            {
              ...prev.personalInfo,
              [name]: value
            }
          }));
      };

      //handling the skills being entered by the project owner
      const handleSkillChange = (index, value) =>
      {
        const newSkills = [...prev.skills];
        newSkills[index] = value;
        setProfile(prev => (
          {
            ...prev,
            skills: newSkills
          }));
      };

      //adding skills
      const addSkill = () =>
      {
        setProfile(prev => (
          {
            ...prev,
            skills: [...prev.skills, '']
          }));
      };

      //handling the projects
      const handleProjectChange = (index, field, value) =>
      {
        const newProjects = [...prev.projects];
        newProjects[index] = 
        {
          ...newProjects[index],
          [field]: value
        };

        setProfile(prev => (
          {
            ...prev,
            projects: newProjects
          }));
      };

      //adding projects
      const addProject = () => 
      {
        setProfile(prev =>(
          {
            ...prev,
            projects: [...prev.projects, 
              {
                title: '',
                description: '',
                technologies: '',
                link: ''
              }]
          }));
      };

      //Handling the submit button of the information provided
      const handleSubmit = async (e) =>
      {
        e.preventDefault();
        //Here i will implemet the API call to save the profile
        console.log('Profile data to save:', profile);
        //closing the ability to edit
        // setIsEditing(false);
      };

      //RETURN ==== PUT THE HTML HERE SO IT RETURNS THE UI
      return(
        <div className='profile-container'>
          <h1 className='profile-title'>Profile Creation</h1>

          <form className='profile-form' onSubmit={handleSubmit}>
            {/*Personal Information Section*/}
            <div className='card'>
              <div className='card-header'>
                <User size={20} />
                <h2>Personal Information</h2>
              </div>

              <div className='card-content'>
                <div className='personal-grid'>
                  {/*Full name input*/}
                  <div className='input-field'>
                    <input 
                    type='text'
                    name='fullName'
                    placeholder='Enter Full Name'
                    value={profile.personalInfo.fullName}
                    onChange={handlePersonalInfoChange}
                    className='form-input'
                      />
                  </div>
                  {/*Email input*/}
                  <div className='input-field'>
                    <input 
                    type='email'
                    name='email'
                    placeholder='Enter Email Address'
                    value={profile.personalInfo.email}
                    onChange={handlePersonalInfoChange}
                    className='form-input'
                      />
                  </div>
                  {/*Phone Number input*/}
                  <div className='input-field'>
                    <input 
                    type='tel'
                    name='phone'
                    placeholder='Enter Phone Number'
                    value={profile.personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                    className='form-input'
                      />
                  </div>
                </div>
                {/*About Yourself input*/}
                <div className='input-field'>
                  <textarea 
                  name='about'
                  placeholder='Write About Yourself'
                  value={profile.personalInfo.about}
                  onChange={handlePersonalInfoChange}
                  className='form-input textarea'
                    />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className='card'>
              <div className='card-header'>
                <Code size={20} />
                <h2>Skills</h2>
              </div>

              <div className='card-content'>
                {profile.skills.map((skill, index) => (
                <div className='skill-input-field' key={index}>
                  <input 
                  type='text'
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder='Enter your skill'
                  className='form-input skill-input'
                    />
                </div>
                  ))}
                {isEditing && (
                  <button
                  type='button'
                  onClick={addSkill}
                  className='btn btn-primary'
                  >
                    Add Skill
                  </button>
                )}
              </div>
            </div>
            {/*Projects Section */}
          </form>
        </div>
      );
  };
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

export default ProfileCreation;
