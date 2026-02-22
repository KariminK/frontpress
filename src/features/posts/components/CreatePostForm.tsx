import { Button, Container, Heading } from "@chakra-ui/react";
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyleKit } from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";

export default function CreatePostForm() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ link: { openOnClick: false } }),
      Subscript,
      Superscript,
      TextAlign.configure({ types: ["paragraph", "heading"] }),
      TextStyleKit,
    ],
    immediatelyRender: false,
  });
  return (
    <Container mt={"5"} px={"0"} as={"main"}>
      <Heading as={"h1"} mb={5}>
        Create new post
      </Heading>
      <RichTextEditor.Root editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlGroup>
            <Control.FontFamily />
            <Control.FontSize />
          </RichTextEditor.ControlGroup>

          <RichTextEditor.ControlGroup>
            <Control.Bold />
            <Control.Italic />
            <Control.Underline />
            <Control.Strikethrough />
            <Control.Code />
          </RichTextEditor.ControlGroup>

          <RichTextEditor.ControlGroup>
            <Control.H1 />
            <Control.H2 />
            <Control.H3 />
            <Control.H4 />
          </RichTextEditor.ControlGroup>
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content />
      </RichTextEditor.Root>
      <Button variant={"surface"} mt={5}>
        Create
      </Button>
    </Container>
  );
}
