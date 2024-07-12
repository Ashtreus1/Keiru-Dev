import WorkExperience from "@/components/about/WorkExperience";
import AboutOverview from "@/components/about/AboutIntro";
import Skills from "@/components/about/Skills";
import EducationTimeline from "@/components/about/EducationTimeline";

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