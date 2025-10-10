export default {
	  permalink: function ({ question }) {
		    return `/faq/${this.slugify(question)}/`;
	  },
    "layout": "page",
    "tags": [
        "faq"
    ]
};
