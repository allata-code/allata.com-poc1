import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      blogPageSize: 10,
      posts: [
        {
          id: 1,
          slug: 'bacon-ipsum',
          title: 'Bacon Ipsum',
          author: 'Babe',
          postDate: '5-14-2018',
          body: '<p>Bacon ipsum dolor amet anim hamburger fugiat picanha. Salami t-bone swine flank beef labore capicola drumstick pork loin short loin pork belly laboris ut pork chop. Aliqua shankle laboris porchetta cupim short loin in fugiat rump beef nostrud. Mollit venison esse laboris ullamco. Consectetur magna adipisicing esse, shoulder frankfurter ipsum duis andouille tail chuck aliqua deserunt tongue chicken.</p>' +
            '<p>Tongue shoulder aute corned beef kielbasa flank. Porchetta ball tip in, shoulder occaecat shank lorem. Beef ribs ut ipsum t-bone. Commodo beef flank nulla filet mignon. Id et ham hock in doner hamburger flank proident fatback. Est anim leberkas enim, lorem laboris sausage fatback velit.</p>' +
            '<p>Commodo sunt veniam rump tongue sed. Leberkas proident qui exercitation ball tip laboris kevin doner meatball jowl velit reprehenderit consequat. Consectetur meatball buffalo cillum sed, esse et laboris ball tip burgdoggen ribeye est ut. Exercitation kevin in, capicola alcatra sirloin buffalo veniam deserunt qui adipisicing. Filet mignon strip steak kielbasa porchetta eu ullamco. Dolore adipisicing culpa in boudin aliqua ullamco jowl chicken. Meatball ea pork chop, ut dolor proident sint salami aliquip dolore.</p>' +
            '<p>Ea kielbasa nulla sirloin proident id. Rump elit beef, boudin labore nulla ut biltong jowl tenderloin t-bone. Adipisicing dolore pancetta chicken fatback voluptate filet mignon swine beef ribs pork jerky. Ullamco ipsum sint kevin ut reprehenderit ball tip prosciutto turducken dolore short loin tongue sed brisket.</p>' +
            '<p>T-bone pork bacon ipsum sirloin fatback id spare ribs enim. Elit velit shank, nulla brisket cupidatat incididunt minim. Anim drumstick occaecat mollit pastrami labore. Jowl leberkas pork loin porchetta strip steak incididunt nulla picanha filet mignon labore shank veniam pork officia frankfurter. Minim reprehenderit prosciutto salami shoulder andouille tempor culpa cupidatat et veniam nisi voluptate anim meatball.</p>'
        },
        {
          id: 0,
          slug: 'riker-ipsum',
          title: 'Rider Ipsum',
          author: 'William T. Riker',
          postDate: '2-24-2018',
          body: 'Shields up! Rrrrred alert! I\'ve had twelve years to think about it. And if I had it to do over again, I would have grabbed the phaser and pointed it at you instead of them. You enjoyed that. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Worf, It\'s better than music. It\'s jazz. Besides, you look good in a dress. I\'m afraid I still don\'t understand, sir. Fear is the true enemy, the only enemy. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Not if I weaken first. The look in your eyes, I recognize it. You used to have it for me. When has justice ever been as simple as a rule book? Smooth as an android\'s bottom, eh, Data? We could cause a diplomatic crisis. Take the ship into the Neutral Zone I am your worst nightmare! Our neural pathways have become accustomed to your sensory input patterns. In all trust, there is the possibility for betrayal. How long can two people talk about nothing? I suggest you drop it, Mr. Data. Yesterday I did not know how to eat gagh. Mr. Crusher, ready a collision course with the Borg ship. What\'s a knock-out like you doing in a computer-generated gin joint like this? Commander William Riker of the Starship Enterprise. My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant? Well, that\'s certainly good to know. Sorry, Data. This is not about revenge. This is about justice. We know you\'re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Wait a minute - you\'ve been declared dead. You can\'t give orders around here. I can\'t. As much as I care about you, my first duty is to the ship. I recommend you don\'t fire until you\'re within 40,000 kilometers. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules. Now, how the hell do we defeat an enemy that knows us better than we know ourselves? Why don\'t we just give everybody a promotion and call it a night - \'Commander\'? Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. Congratulations - you just destroyed the Enterprise. Is it my imagination, or have tempers become a little frayed on the ship lately? Captain, why are we out here chasing comets? Fate protects fools, little children and ships named Enterprise. Computer, belay that order. You bet I\'m agitated! I may be surrounded by insanity, but I am not insane. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet.\n'
        },
      ],
      jobs: {
        'software-developer': {
          title: 'Software Developer',
          description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.\n' +
            '\n' +
            'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.\n' +
            '\n' +
            'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.\n' +
            '\n'
        },
        'senior-software-developer': {
          title: 'Senior Software Developer',
          description: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\n' +
            '\n' +
            'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.\n' +
            '\n' +
            'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.\n' +
            '\n' +
            'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.'
        }
      }
    }),
    mutations: {
    },
    actions: {
    },
    getters: {
      blogPosts: (state) => (page) => {
        return state.posts.slice(Math.min(page * state.blogPageSize, state.posts.length), Math.min((page * state.blogPageSize) + 10, state.posts.length));
      },
      post: (state) => (slug) => {
        return state.posts.find(post => post.slug === slug)
      }
    }
  })
};

export default createStore
