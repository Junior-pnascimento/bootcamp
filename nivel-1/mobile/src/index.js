import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import api from './services/api';

// tags
// nao possuem valor sematico (significado)
// nao possuem estilizacao propria
// Todos os componentes possuem por padao "display: flex"

// View(container): div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get('projects')
      .then(response => {
        // console.log('data', response.data);
        setProjects(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owmer: 'Junior Nascimento',
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      {/*  Trocar view por FlatList
      
      <View style={styles.container}>
        {projects.map(project => (
          <Text style={styles.project} key={project.id}>
            {project.title}
          </Text>
        ))}
      </View> */}

      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.project}> {project.title}</Text>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    // justifyContent: 'center',  nao pode ter por causa do ScrollView e FlatList
    // alignItems: 'center',
  },

  project: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
