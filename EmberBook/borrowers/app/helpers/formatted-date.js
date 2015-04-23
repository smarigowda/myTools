import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';


export default Ember.HTMLBars.makeBoundHelper(function(args) {
	return formatDate(args);
});
