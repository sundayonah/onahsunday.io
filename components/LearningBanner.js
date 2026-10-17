import React from 'react';
import styles from './LearningBanner.module.css';
import roadmapsData from '../jsonFile/learningRoadmaps.json';

const MESSAGE = 'Currently learning Python';

function normalizeTopic(topic) {
   if (typeof topic === 'string') {
      return { label: topic, completed: false };
   }
   return topic;
}

function BannerStrip({ pythonRoadmap, topics, resources, duplicate }) {
   const normalizedTopics = topics.map(normalizeTopic);

   return (
      <div
         className={styles.strip}
         aria-hidden={duplicate ? true : undefined}
      >
         <span className={styles.message}>{MESSAGE}</span>
         <span className={styles.sep} aria-hidden="true">
            ◆
         </span>
         {pythonRoadmap?.href && (
            <>
               <a
                  href={pythonRoadmap.href}
                  className={styles.roadmapLink}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  {pythonRoadmap.label}
               </a>
               <span className={styles.sep} aria-hidden="true">
                  ◆
               </span>
            </>
         )}
         {normalizedTopics.length > 0 && (
            <ul className={styles.topicList} aria-label="Python learning progress">
               {normalizedTopics.map(({ label, completed }) => (
                  <li key={label}>
                     <span
                        className={
                           completed
                              ? `${styles.topic} ${styles.topicDone}`
                              : styles.topic
                        }
                     >
                        {completed && (
                           <span className={styles.check} aria-hidden="true">
                              ✓
                           </span>
                        )}
                        {label}
                        {completed && (
                           <span className={styles.srOnly}> (completed)</span>
                        )}
                     </span>
                  </li>
               ))}
            </ul>
         )}
         {resources?.length > 0 && (
            <>
               <span className={styles.sep} aria-hidden="true">
                  ◆
               </span>
               <ul className={styles.roadmapList}>
                  {resources.map(({ label, href }) => (
                     <li key={href}>
                        <a
                           href={href}
                           className={styles.roadmapLink}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           {label}
                        </a>
                     </li>
                  ))}
               </ul>
            </>
         )}
      </div>
   );
}

export default function LearningBanner() {
   const pythonRoadmap = roadmapsData.pythonRoadmap;
   const topics = roadmapsData.topics ?? [];
   const resources = roadmapsData.resources ?? [];

   return (
      <aside className={styles.bar} aria-label={MESSAGE}>
         <div className={styles.viewport}>
            <div className={styles.track}>
               <BannerStrip
                  pythonRoadmap={pythonRoadmap}
                  topics={topics}
                  resources={resources}
               />
               <BannerStrip
                  pythonRoadmap={pythonRoadmap}
                  topics={topics}
                  resources={resources}
                  duplicate
               />
            </div>
         </div>
      </aside>
   );
}
