import React, {Component} from 'react';
import ContentViewSections from './ContentViewSections.js';
import ContentViewTags from './ContentViewTags.js';
import '../stylesheets/ContentView.css';

class ContentView extends Component {

  sections = [
    {
      id: 0,
      title: 'Latest',
      type: 'horizontal',
      items: [
        {
          publisher: 'New York Times',
          date: 'Thursday',
          readingTime: '12 Min',
          title: 'Ambushed in Mexico, Mormon Children Tried to Save One Another',
          previewText: 'Children bore the brunt of a deadly shooting in Mexico. But some of them survived, and endured harrowing journeys to get help.'
        },
        {
          publisher: 'Zeit',
          date: 'Today',
          readingTime: '9 Min',
          title: 'Die Selbstzerstörung der Thüringer CDU',
          previewText: 'CDU-Fraktionschef Mike Mohring sendet in Thüringen widersprüchliche Signale in Richtung AfD. Ist das nur Führungsversagen oder steckt dahinter eine Strategie?'
        },
        {
          publisher: 'New York Times',
          date: 'Nov. 6 2019',
          readingTime: '23 Min',
          title: 'A Physics Magic Trick: Take 2 Sheets of Carbon and Twist',
          previewText: 'The study of graphene was starting to go out of style, but new experiments with sheets of the ultrathin material revealed there was much left to learn.'
        }
      ]
    },
    {
      id: 1,
      title: 'Hot',
      type: 'grid',
      items: [
        {
          publisher: 'The Guardian',
          date: '1:45 PM',
          readingTime: '12 Min',
          title: 'A Not-So-Special Relationship: Johnson Backs Away From Trump',
        },
        {
          publisher: 'Bild',
          date: 'Yesterday',
          readingTime: '3 Min',
          title: 'Ministerin plant nationalen Sicherheitsrat',
        },
        {
          publisher: 'New York Times',
          date: 'Nov. 25 2019',
          readingTime: '13 Min',
          title: 'Colorado Fossils Show How Mammals Raced to Fill Dinosaurs\' Void',
        },
        {
          publisher: 'Tech Crunch',
          date: 'Monday',
          readingTime: '7 Min',
          title: 'Riding While Drunk and Other Dangers of the Electric Scooter Craze',
        },
        {
          publisher: 'New York Times',
          date: 'Nov. 17 2019',
          readingTime: '9 Min',
          title: 'How to Give People Advice They’ll Be Delighted to Take',
        },
        {
          publisher: 'New York Times',
          date: 'Two Days ago',
          readingTime: '5 Min',
          title: 'Avoid Burnout Before You’re Already Burned Out',
        }
      ]
    }
  ];

  tags = [
    'tacos', 'flexitarians', 'siracha-tumblr', 'chiccharones', 'dreamcatcher', 'bycicle-rights-blog', 'helvetica'
  ];

  render() {
    return(
      <div id='content-view'>
        <ul id='content-view-tags'>
          <ContentViewTags tags={this.tags}/>
        </ul>
        <ContentViewSections sections={this.sections}/>
      </div>
    );
  }

}

export default ContentView;