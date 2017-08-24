Router.configure({
    layoutTemplate: 'layout'
})

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'home'
    });

    this.route('about');

    this.route('work');

    this.route('blog', {
        path: '/blog',
       template: 'blog'
    });

    this.route('contact');

    this.route('list_posts', {
        path: '/admin/posts',
        template: 'list_posts',
        data: function () {
            templateData = {
                posts: Posts.find()
            };
            return templateData;
        },
        onBeforeAction: function () {
            if (!Meteor.userId() || Meteor.userId() == null) {
                Router.go('/');
            }
            this.next();
        }
    });

    this.route('add_post', {
        path: '/admin/posts/add',
        template: 'add_post',
        onBeforeAction: function () {
            if (!Meteor.userId() || Meteor.userId() == null) {
                Router.go('/');
            }
            this.next();
        }
    });

    this.route('edit_post', {
        path: '/admin/posts/:_id/edit',
        template: 'edit_post',
        data: function(){
            var currentPost = this.params._id;
            return Posts.findOne({_id: currentPost});
        },
        onBeforeAction: function () {
            if (!Meteor.userId() || Meteor.userId() == null) {
                Router.go('/');
            }
            this.next();
        }
    })

    this.route('list_projects', {
        path: '/admin/projects',
        template: 'list_projects',
        onBeforeAction: function () {
            if (!Meteor.userId() || Meteor.userId() == null) {
                Router.go('/');
            }
            this.next();
        }
    })

    this.route('add_projects', {
        path: '/admin/projects/add',
        template: 'add_projects',
        onBeforeAction: function () {
            if (!Meteor.userId() || Meteor.userId() == null) {
                Router.go('/');
            }
            this.next();
        }
    });

    this.route('edit_projects', {
        path: '/admin/projects/:_id/edit',
        template: 'edit_projects',
        onBeforeAction: function () {
            if (!Meteor.userId() || Meteor.userId() == null) {
                Router.go('/');
            }
            this.next();
        }
    });

    this.route('login', {
        path: '/admin',
        template: 'login'
    });
});