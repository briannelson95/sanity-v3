import { defineType, defineField } from "sanity";
import { MyCustomStringInput } from "../../components/MyCustomStringInput"

export const blog = defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Blog title",
      components: {
        input: MyCustomStringInput
      }
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
    }),
    defineField({
      name: "mainContent",
      type: "blockContent",
      title: "Main Content"
    })
  ],
})