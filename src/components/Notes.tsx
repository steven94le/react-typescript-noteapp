import * as React from "react";
import { Card } from "react-bootstrap";
import { Note } from "../models/note.model";

interface INotesProps {
  note: Note;
}

const Notes: React.FC<INotesProps> = ({ note }) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
