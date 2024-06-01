import WorkExperience from "@/components/AboutMe/WorkExperience";
import AboutOverview from "@/components/AboutMe/AboutOverview";
import Skills from "@/components/AboutMe/Skills";
import EducationTimeline from "@/components/AboutMe/EducationTimeline";

const About = () => {
    return (
        <>
            <AboutOverview/>
            <WorkExperience/>
            <EducationTimeline/>
            <Skills/>
        </>
    );
}

export default About;