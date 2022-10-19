CREATE DATABASE `la_vie_saude_mental`;

USE `la_vie_saude_mental`;

CREATE TABLE `psicologos` (
  `idpsicologo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(150) NOT NULL,
  `apresentacao` varchar(200) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`idpsicologo`)
);

CREATE TABLE `pacientes` (
  `idpaciente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `idade` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`idpaciente`)
);

CREATE TABLE `atendimento` (
  `idatendimento` int NOT NULL AUTO_INCREMENT,
  `data_atendimento` date DEFAULT NULL,
  `observacao` varchar(100) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `id_psicologo` int NOT NULL,
  `id_paciente` int NOT NULL,
  PRIMARY KEY (`idatendimento`),
  KEY `fk_psicologos_atendimento` (`id_psicologo`),
  KEY `fk_pacientes_atendimento` (`id_paciente`),
  CONSTRAINT `fk_pacientes_atendimento` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`idpaciente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_psicologos_atendimento` FOREIGN KEY (`id_psicologo`) REFERENCES `psicologos` (`idpsicologo`) ON DELETE CASCADE ON UPDATE CASCADE
); 