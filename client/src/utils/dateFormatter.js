import Moment from 'moment';

export default function formatDate(date, type){
    if(date){        
        let formatted = Moment(date).format('DD.MM.YYYY - HH:MM');
        if(type === 'preview'){
            let dateWithoutTime = Moment(date).format('DD MM YY');
            let currentDate = new Date();
            currentDate = Moment(currentDate).format('DD MM YY');
            formatted = (dateWithoutTime === currentDate) ? "Heute" : Moment(date).format('DD.MM.YYYY');                  
        }
        return formatted;
    }
  }