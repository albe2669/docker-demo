FROM golang:1.21
WORKDIR /src
COPY main.go /src
RUN go build -o /bin/hello ./main.go

FROM scratch
COPY --from=0 /bin/hello /bin/hello
CMD ["/bin/hello"]
