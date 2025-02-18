
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
          about: '',
          profilePicture: null
        },
        //For image preview
        profilePictureUrl: '',
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

      //Able to edit the form.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Dont forget about removing the edit
      // const [isEditing, setIsEditing] = useState(true);

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

      //adding a picture
      const addPic = (e) =>
      {
        const imgFile = e.target.files[0];
        //Update the profile pic in state
        if(imgFile)
        {
          setProfile(prev =>(
            {
              ...prev,
              personalInfo:
              {
                ...prev.personalInfo,
                profilePicture: imgFile
              },
              profilePictureUrl: URL.createObjectURL(imgFile)
            }));
        }
      };

      //Function to remove the profile picture
      const removePic = () =>
      {
        setProfile(prev => (
          {
            ...prev,
            personalInfo:
            {
              ...prev.personalInfo,
              profilePicture: null
            },
            profilePictureUrl: ''
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

              {/* Add Profile Picture Section */}
              <div className='profile-picture'>
                  <div className='prof-pic-container'>
                    {profile.profilePictureUrl ? (
                      <div className='prof-pic-wrap'>
                        <img 
                        src={profile.profilePictureUrl} 
                        alt='Profile Image'
                        className='profile-image'
                        />
                        <button
                        type='button'
                        className='btn-remove-image'
                        onClick={removePic}
                        >
                          Remove Pic
                        </button>
                      </div>
                    ):(
                      <div className='prof-pic-holder'>
                        <User size={40} />
                        <input
                        type='file'
                        accept='image/*'
                        onChange={addPic}
                        className='prof-pic-input'
                        id='prof-pic-input'
                          />
                        <label className='add-pic-label' htmlFor='prof-pic-input'>
                          Upload Photo
                        </label>
                      </div>
                    )}
                  </div>
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
                {/*Adding a picture button*/}
                {/* <button
                type='button'
                onClick={addPic}
                className='btn btn-primary'
                >
                  Add Picture
                </button> */}
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
                  {/*Skills input*/}
                  <input 
                  type='text'
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder='Enter your skill'
                  className='form-input skill-input'
                    />
                </div>
                ))}
                {/*Adding skills button*/}
                <button
                type='button'
                onClick={addSkill}
                className='btn btn-primary'
                >
                  Add Skill
                </button>
              </div>
            </div>

            {/*Projects Section */}
            <div className='card'>
                <div className='card-header'>
                  <Briefcase size={20} />
                  <h2>Projects</h2>
                </div>

                <div className='card-content'>
                  {profile.projects.map((project, index) =>(
                    <div className='project-card' key={index}>
                      {/*Project title input*/}
                      <input 
                      type='text'
                      value={project.title}
                      onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                      placeholder='Enter Project Title'
                      className='form-input'
                        />
                      {/*Project description input*/}
                      <textarea
                      name='description'
                      value={project.description}
                      onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                      placeholder='Enter Your Project Description'
                      className='form-input textarea'
                        />
                      {/*Project technologies input*/}
                      <input
                      type='text'
                      value={project.technologies}
                      onChange={(e) => handleProjectChange(index, 'technologies', e.target.value)}
                      placeholder='Enter Technologies Used'
                      className='form-input'
                        />
                      {/*Url link to your Project input*/}
                      <input
                      type='url'
                      value={project.link}
                      onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                      placeholder='Enter Project URL'
                      className='form-input'
                        />
                    </div>
                  ))}
                  {/*Adding project button*/}
                  <button
                  type='button'
                  onClick={addProject}
                  className='btn btn-primary'
                  >
                    Add Project
                  </button>
                </div>
            </div>

            <button className='btn btn-secondary' type='submit'>
              Save Profile
            </button>
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
