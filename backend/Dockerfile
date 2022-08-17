FROM node:12-slim as base

# 앱 디렉터리 생성

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
ENV NODE_ENV=production

RUN mkdir /app && chown -R node:node /app
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production
WORKDIR /app

USER node

# 앱 소스 추가
COPY --chown=node:node package.json package-lock*.json ./

RUN npm ci --prod

EXPOSE 3000

CMD [ "node", "dist/main" ]





### Builder
FROM base as builder

# Install development dependencies (typings, etc.) require for build
RUN npm install --only=development

# Copy application source code
COPY --chown=node:node . ./

# Build application
RUN npm run build


### Runtime
FROM base as runtime
# Copy runtime dependencies
COPY --from=base /app/node_modules ./node_modules
# Copy compiled application
COPY --from=builder /app/dist ./dist
# Setup entry point
ENTRYPOINT [ "node", "dist/main.js" ]