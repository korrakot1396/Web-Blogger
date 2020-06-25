<template>

    <div>

        <h1>the number is : {{views}} </h1>
        <button @click="updateCounter(1)">Increase</button> 
        <button @click="updateCounter(-1)">Decrease</button>  
        <br>
        <br><br>

        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
 
          <h1>{{blog.title}}</h1>
          <p>{{blog.post}}</p>
        
        
        </div>

    </div>

</template>

<script>

    export default {
        data() {
            return {
                 views : 0,
                 blogs : [],
            }
        },
        methods: {
             updateCounter(number){
                  this.views += number
             }
        },
        created(){
             // call the sever to get views of this blog post...
             this.views = 100
             //get the blog posts
             let posts = [{title: 'this is blog title1','post' : 'this is the blog post1', id: 1},
                      {title: 'this is blog title2','post' : 'this is the blog post2', id: 2},
                      {title: 'this is blog title3','post' : 'this is the blog post3', id: 3},
                      {title: 'this is blog title4','post' : 'this is the blog post4', id: 4},]

             this.blogs = posts
        }
    }
</script>