import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Note } from "../models/note.model";

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = useState<string>("");

  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("Both title and text fields are mandatory");
    }

    setError("");
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
  };

  return (
    <>
      <h2>Create Notes</h2>
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title for note"
            ref={titleRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder="Enter notes"
            as="textarea"
            rows={3}
            ref={textRef}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="colorInput">Note Color</Form.Label>
          <Form.Control
            type="color"
            id="colorInput"
            defaultValue="#dfdfdf"
            ref={colorRef}
            title="Choose your color"
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNotes;
