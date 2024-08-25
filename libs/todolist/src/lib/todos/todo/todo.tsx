
export interface TODO {
  id: number,
  name: string,
  details: string
}

export const Todo: React.FC<TODO> = ({id, name, details}:TODO) => {
  return (
    <li key={id}>{id} - {name} - {details}</li>
  );
}

