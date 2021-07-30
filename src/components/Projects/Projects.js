import React from 'react';
//sssss
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit } ) =>(
         <BlogCard key={id}>
           <Img src={image} />
            <TitleContent>
               <HeaderThree title>{title}</HeaderThree>
                <Hr />
                <CardInfo>{description}</CardInfo>                
            </TitleContent>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                 { tags.map((tag, i) => (
                   <Tag key={i}>{tag} </Tag>
                 ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} >visit</ExternalLinks>
              <ExternalLinks href={source} >Code</ExternalLinks>
            </UtilityList>
         </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;