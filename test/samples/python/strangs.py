
def main():
    try:
        "\x81" .decode('utf-8')
    except UnicodeError as e:
        print(e)
        print("encoding:", e.encoding)
        print("reason:", e.reason)
        print("object:", e.object)
        print("start:", e.start)
        print("end", e.end)


if __name__ == '__main__':
    main()
