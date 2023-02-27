import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name:"tile",
      title:"title",
      description: "Title of the Project",
      type:"string",
    },
    {
      name:"image",
      title:"Image",
      type:"image",
      options:{
        hotspot:true,
      }
    },
    {
      name:"summary",
      title:"Summary",
      type:"text",

    },

    {
      name:"technologies",
      title:"Technologies",
      type:"array",
      of:[{ type:"reference" , to:{type:"skill"}}],
    },
    {
      name:"linktoBuild",
      title:"LinktoBuild",
      type:"url",
    },
    
  ],
 
})
