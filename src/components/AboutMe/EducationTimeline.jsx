import React from 'react';

const EducationTimeline = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-10">
      <h1 className="text-4xl font-bold mb-8">Education Timeline</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-cyan-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic text-cyan-500">Senior Highschool Level</time>
                <div className="text-lg font-black">Information and Communication Technology Strand Major in Computer Programming</div>
                I learned the fundamentals and Object Oriented Programming in my first year of it. In second year, I learned the basics of MySQL Database and the uses of it in the real-world application.
            </div>
          <hr className='bg-cyan-500'/>
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-cyan-500"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic text-cyan-500">Bachelor Degree (Present)</time>
            <div className="text-lg font-black">Bachelor of Science in Information Technology</div>
            Currently pursuing Bachelor of Science in Information Technology as my course program. Sophomore year in this present day, and have the commitment to pursue the degree of it.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default EducationTimeline;
