import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
  NoItemsMessage,
  NoItemsIcon,
  NoItemsContainer,
} from './styles.js';

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
      setInputTask("");  // Limpa o input após adicionar a tarefa
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function deletarItem(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} value={inputTask} placeholder="O que tenho para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <NoItemsContainer>
              <NoItemsIcon>📝</NoItemsIcon>
              <NoItemsMessage>Não há itens na Lista</NoItemsMessage>
            </NoItemsContainer>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
