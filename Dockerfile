FROM postgres:latest

ENV POSTGRES_USER=root
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=markit

EXPOSE 5432