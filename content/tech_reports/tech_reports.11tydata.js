export default {
	  permalink: function ({ title }) {
		    return `/tech_reports/${this.slugify(title)}/`;
	  },
    "layout": "publication.njk",
    "tags": [
        "tech-report"
    ]
};
