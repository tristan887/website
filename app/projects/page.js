import { inter } from "../fonts";
import React from 'react';
import ProjectCards from "../components/projectcards"


export default function projects() {
  return (
    <main className="min-h-screen p-8">
      <h1 className={`text-6xl font-bold text-center ${inter.className}`}>
        projects
      </h1>
      <h2 className={`text-5xl mt-4 font-bold text-center ${inter.className}`} style={{ color: '#de5003ff' }}>
      2025
      </h2>

      <ProjectCards />

      <h2 className={`text-5xl mt-4 font-bold text-center ${inter.className}`} style={{ color: '#de5003ff' }}>
      2024
      </h2>
      {/* SoundCloud Podcast */}
      <h3 className={`text-2xl mt-4 font-bold text-left max-w-4xl mx-auto ${inter.className}`} >
      Podcast: The Edge of Heaven by Nisreen Alghawi (Feb 2024)
      </h3>
      <p className={`mt-2 text-lg text-gray-700 text-left max-w-4xl mx-auto ${inter.className}`} >
      Nisreen Alghawi was raised in the emergence of the Lebanese Civil War.
      In this interview, she explains how the war shaped her identity and culture by the Lebanese diaspora. 
      
      Nisreen also discusses the inspiration for writing her first book, <i>The Edge of Heaven</i>.
      It takes place in her hometown located in the South of Beirut called Choueifat.
      She shares funny stories, insights into her childhood friendships, and heartfelt family adventures that carried her through those difficult moments. 
      And it is through those memories that Nisreen is able to reflect on the war through a different lense. Uncovering the effect
      fleeing one's home country and loss of its members is emotionally charged. However, this gave Nisreen the strength and courage to share her story. 

      </p>
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-4xl">
        <iframe 
          width="100%" 
          height="166" 
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1811905359&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <div 
          style={{
            fontSize: '10px',
            color: '#cccccc',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
            fontWeight: 100
          }}
        >
          <a 
            href="https://soundcloud.com/user-229610714" 
            title="UCF Global Perspectives" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            UCF Global Perspectives
          </a>
          {' · '}
          <a 
            href="https://soundcloud.com/user-229610714/ucf-global-perspectives-gpii-interns-raphael-merrit-diana-tristan-x-author-nisreen-haidar-alghawi" 
            title="GPII Interns (Raphael Merrit &amp; Diana Tristan) X Author Nisreen Haidar Alghawi" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            GPII Interns (Raphael Merrit &amp; Diana Tristan) X Author Nisreen Haidar Alghawi
          </a>
        </div>
        </div>
      </div>
      {/* LinkedIn Posts Container */}
      <h3 className={`text-2xl mt-4 font-bold text-left max-w-4xl mx-auto ${inter.className}`} >
      LinkedIn Posts:
      </h3>
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        {/* LinkedIn Post 1 */}
        <div className={{ transform: 'scale(0.4)', transformOrigin: 'top' }}>
          <iframe 
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7169434337401122816" 
            height="731" 
            width="304" 
            frameBorder="0" 
            allowFullScreen="" 
            title="Embedded post 1"
          />
        </div>
        
        {/* LinkedIn Post 2 */}
        <div className={{ transform: 'scale(0.4)', transformOrigin: 'top' }}>
          <iframe 
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7172010724670562304" 
            height="730" 
            width="304" 
            frameBorder="0" 
            allowFullScreen="" 
            title="Embedded post 2"
          />
        </div>
        
        {/* LinkedIn Post 3 - Add more as needed */}
        <div className={{ transform: 'scale(0.8)', transformOrigin: 'top' }}>
          <iframe 
            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7181117916422017025"
            height="730" 
            width="304"
            frameBorder="0" 
            allowFullScreen="" 
            title="Embedded post 3"
          />
        </div>
      </div>
    </main>
  );
}

